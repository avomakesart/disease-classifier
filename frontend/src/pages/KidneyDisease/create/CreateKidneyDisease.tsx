import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { DateInput, Input, SideBarLayout } from '../../../components';
import { Button } from '../../../components/Button/Button';
import { useCreateKidneyMeasureMutation } from '../../../generated/graphql';

const CreateKidneyDisease = () => {
  const history = useHistory();

  const [date, setDate] = useState(new Date());
  const [createKidneyMeasure] = useCreateKidneyMeasureMutation();

  const handleDateChange = (date: any) => setDate(date);

  return (
    <SideBarLayout sectionTitle='Create Kidney Measure'>
      <Formik
        initialValues={{
          eGFR: Number(),
          atDate: format(date, 'yyyy-MM-dd'),
        }}
        onSubmit={async (values) => {
          const { errors } = await createKidneyMeasure({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'kidneyMeasures:{}' });
            },
          });
          if (!errors) {
            toast.success('Your kidney measure data has been created', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          setTimeout(() => {
            history.push('/kidney-disease');
          }, 3000);
        }}
      >
        {({ values, handleChange }) => (
          <section className='text-gray-700 body-font'>
            <div className='container px-8 pb-24 mx-auto lg:px-4'>
              <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0'>
                <Form>
                  <div className='relative flex flex-col'>
                    <Input
                      label='eGFR'
                      htmlFor='eGFR'
                      type='number'
                      id='eGFR'
                      value={values.eGFR}
                      onChange={handleChange}
                      placeHolder='Type a number between 0 to 90'
                      name='eGFR'
                      min={0}
                      max={90}
                    />
                  </div>

                  <div className='relative flex flex-col mt-6'>
                    <DateInput
                      label='Select a date'
                      htmlFor='atDate'
                      id='atDate'
                      selected={date}
                      value={(values.atDate = format(date, 'yyyy-MM-dd'))}
                      onChange={handleDateChange}
                      name='atDate'
                      placeHolder='yyyy/mm/dd'
                    />
                  </div>

                  <div className='mt-7'>
                    <Button
                      textColor='white'
                      hasBorder={true}
                      borderColor='white'
                      backgroundColor='black'
                      text='Create Category'
                      type='submit'
                    />
                  </div>
                </Form>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </SideBarLayout>
  );
};

export default CreateKidneyDisease;
