import {
  Error,
  Loader,
  Modal,
  ModalConfirmButtons,
  SideBarLayout,
  Table,
} from '../../components';
import {
  useBloodPressuresQuery,
  useDeleteBloodPressureMutation,
} from '../../generated/graphql';
import { getBpClassification } from '../../utils';
import { PlusIcon, TrashIcon } from '../../assets/Icons';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks';
import { toast } from 'react-toastify';

const BloodPressure = () => {
  const { isShown, toggle } = useModal();
  const [deleteBloodPressure] = useDeleteBloodPressureMutation();
  const { data, error, loading } = useBloodPressuresQuery({
    variables: { limit: 6, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  // Graphql loaded data
  const bpData = data?.bloodPressures?.bloodPressure;

  const newBpData = bpData?.map((item: any) => {
    const { id, sysBp, diaBp, atDate } = item;
    return { id, sysBp, diaBp, atDate };
  });

  // Handlers

  const handleOpen = () => toggle();
  const onCancel = () => toggle();
  const handleDelete = (egFrId: number) => {
    deleteBloodPressure({
      variables: { id: egFrId },
      update: (cache) => {
        cache.evict({ id: 'eGFR:' + egFrId });
      },
    })
      .then(() => toggle())
      .then(() =>
        toast.success('Your BP info has been deleted', {
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
  const bloodClassification = newBpData?.map((el: any) => {
    let data = Object.assign({}, el);
    data.classification = getBpClassification(el.sysBp, el.diaBp);
    data.actions = (
      <>
        <button onClick={handleOpen}>
          <TrashIcon />
        </button>
        {isShown && (
          <Modal
            title='Delete BP'
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
    <SideBarLayout sectionTitle='Blood Pressure Data'>
      {error && <Error errorType='500' description={error.message} />}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='flex justify-end mb-6'>
            <Link
              className='flex flex-row text-gray-800 font-semibold hover:text-gray-600'
              to='/create/blood-pressure'
            >
              <PlusIcon /> Add data
            </Link>
          </div>
          <Table
            colHeaders={['SysBP', 'DiaBP', 'Date', 'Classification', 'Actions']}
            tableData={bloodClassification}
          />
        </>
      )}
    </SideBarLayout>
  );
};

export default BloodPressure;
