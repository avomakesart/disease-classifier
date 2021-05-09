import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PlusIcon, TrashIcon } from '../../assets/Icons';
import {
  Error,
  Loader,
  Modal,
  ModalConfirmButtons,
  SideBarLayout,
  Table,
} from '../../components';
import {
  useDeleteKidneyMeasureMutation,
  useKidneyMeasuresQuery,
} from '../../generated/graphql';
import { useModal } from '../../hooks';
import { getEgfrClassification } from '../../utils';

const KidneyDisease = () => {
  const { isShown, toggle } = useModal();
  const [deleteKidneyMeasure] = useDeleteKidneyMeasureMutation();
  const { data, error, loading } = useKidneyMeasuresQuery({
    variables: { limit: 6, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  // Graphql loaded data
  const egFrData = data?.kidneyMeasures?.kidneyMeasure;

  const newEgFrData = egFrData?.map((item: any) => {
    const { id, eGFR, atDate } = item;
    return { id, eGFR, atDate };
  });

  // Handlers
  const handleOpen = () => toggle();
  const onCancel = () => toggle();
  const handleDelete = (egFrId: number) => {
    deleteKidneyMeasure({
      variables: { id: egFrId },
      update: (cache) => {
        cache.evict({ id: 'eGFR:' + egFrId });
      },
    })
      .then(() => toggle())
      .then(() =>
        toast.success('Your kidney measure has been deleted', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .then(() =>
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      );
  };

  // Utils
  const kidneyClassification = newEgFrData?.map((el: any) => {
    let data = Object.assign({}, el);
    data.classification = getEgfrClassification(el.eGFR);
    data.actions = (
      <>
        <button onClick={handleOpen}>
          <TrashIcon />
        </button>
        {isShown && (
          <Modal
            title='Delete eGFR'
            content='Are you sure you want to delete this info?'
            actions={
              <ModalConfirmButtons
                isDelete
                onConfirm={() => handleDelete(el.id)}
                onCancel={onCancel}
              />
            }
          />
        )}
      </>
    );
    return data;
  });

  return (
    <SideBarLayout sectionTitle='Kidney Disease Data'>
      {error && <Error errorType='500' description={error.message} />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='flex justify-end mb-6'>
            <Link
              className='flex flex-row text-gray-800 font-semibold hover:text-gray-600'
              to='/create/kidney-disease'
            >
              <PlusIcon /> Add data
            </Link>
          </div>
          <Table
            colHeaders={['id', 'eGFR', 'Date', 'Classification', 'Actions']}
            tableData={kidneyClassification}
          />
        </>
      )}
    </SideBarLayout>
  );
};
export default KidneyDisease;
