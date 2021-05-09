import { Error, Grid, Loader, SideBarLayout } from '../../components';
import {
  useBloodPressuresQuery,
  useKidneyMeasuresQuery,
} from '../../generated/graphql';
import {
  getBpClassification,
  getDropReadings,
  getEgfrClassification,
  getLastItemArray,
} from '../../utils';

const Home = () => {
  const { data, error, loading } = useBloodPressuresQuery({
    variables: { limit: 6, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  const {
    data: kidneyData,
    error: kidneyErr,
    loading: loadingKidney,
  } = useKidneyMeasuresQuery({
    variables: { limit: 6, cursor: '' },
    notifyOnNetworkStatusChange: true,
  });

  // Graphql loaded data
  const isBpLoaded = loading
    ? 'loading'
    : data && data?.bloodPressures?.bloodPressure;

  const isEgfrLoaded = loadingKidney
    ? 'loading'
    : kidneyData && kidneyData?.kidneyMeasures.kidneyMeasure;

  // Utils
  const lastItem = getLastItemArray(isBpLoaded);
  const lastEgfrItem = getDropReadings(isEgfrLoaded);

  return (
    <>
      <SideBarLayout sectionTitle='Dashboard'>
        {(error || kidneyErr) && (
          <Error errorType='500' description={error?.message as any} />
        )}
        <Grid cols='2' mobileCols='1'>
          <div className='bg-white md:max-h-96 shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Blood Pressure Data
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                The last blood pressure entry.
              </p>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <div className='border-t border-gray-200'>
                <dl>
                  <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>SysBP</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {lastItem.sysBp}
                    </dd>
                  </div>
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>DiaBP</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {lastItem.diaBp}
                    </dd>
                  </div>
                  <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Date</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {lastItem.atDate}
                    </dd>
                  </div>
                  <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Classification
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                      {getBpClassification(lastItem.sysBp, lastItem.diaBp)}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Kidney Disease Data
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                The last eGFR entry.
              </p>
            </div>
            {loadingKidney ? (
              <Loader />
            ) : (
              lastEgfrItem.map((item: any, index: any) => (
                <div className='border-t border-gray-200' key={index}>
                  <>
                    <dl>
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          eGFR
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {item.firstReading.eGFR}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Date
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {item.firstReading.atDate}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Classification
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {getEgfrClassification(item.firstReading.eGFR)}
                        </dd>
                      </div>
                    </dl>
                    <dl>
                      <div className='bg-gray-50  border-t border-gray-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          eGFR
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {item.secondReading.eGFR}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Date
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {item.secondReading.atDate}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Classification
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {getEgfrClassification(item.secondReading.eGFR)}
                        </dd>
                      </div>
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Dropped Percentage
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                          {item.percentage}
                        </dd>
                      </div>
                    </dl>
                  </>
                </div>
              ))
            )}
          </div>
        </Grid>
      </SideBarLayout>
    </>
  );
};
export default Home;
