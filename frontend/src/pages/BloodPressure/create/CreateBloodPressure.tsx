import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { DateInput, Input, SideBarLayout } from '../../../components';
import { Button } from '../../../components/Button/Button';
import { useCreateBloodPressureMutation } from '../../../generated/graphql';
import { format } from 'date-fns';

interface CreateBloodPressureProps {
  sysBp: number;
  diaBp: number;
}

const CreateBloodPressure: React.FC<CreateBloodPressureProps> = ({
  sysBp,
  diaBp,
}) => {
  const history = useHistory();

  const [date, setDate] = useState(new Date());
  const [createBloodPressure] = useCreateBloodPressureMutation();

  const handleDateChange = (date: any) => setDate(date);

  return (
    <SideBarLayout sectionTitle='Create Blood Pressure'>
      <Formik
        initialValues={{
          sysBp: sysBp,
          diaBp: diaBp,
          atDate: format(date, 'yyyy-MM-dd'),
        }}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createBloodPressure({
            variables: { input: values },
            update: (cache) => {
              cache.evict({ fieldName: 'bloodPressure:{}' });
            },
          });
          if (!errors) history.push('/blood-pressure');
        }}
      >
        {({ values, handleChange }) => (
          <section className='text-gray-700 body-font'>
            <div className='container px-8 pb-24 mx-auto lg:px-4'>
              <div className='flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0'>
                <Form>
                  <div className='relative flex flex-col'>
                    <Input
                      label='SysBp'
                      htmlFor='SysBp'
                      type='number'
                      id='sysBp'
                      value={values.sysBp}
                      onChange={handleChange}
                      placeHolder='Type a number between 0 to 180'
                      name='sysBp'
                    />
                  </div>

                  <div className='relative flex flex-col mt-6'>
                    <Input
                      label='DiaBp'
                      htmlFor='DiaBp'
                      type='number'
                      id='diaBp'
                      value={values.diaBp}
                      onChange={handleChange}
                      placeHolder='Type a number between 0 to 90'
                      name='diaBp'
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
                      text='Create Blood Pressure'
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

export default CreateBloodPressure;
