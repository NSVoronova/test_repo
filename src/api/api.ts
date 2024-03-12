import axios from 'axios';

const getMockData: () => Promise<GetGroupsResponse> = async () => {
  try {
    const response = await axios.get('./src/mocks/groups.json');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (response.data && response.data.length > 0) {
      return { result: 1, data: response.data };
    } else {
      return { result: 0 };
    }
  } catch (error) {
    console.error('Ошибка получения данных:', error);
    return { result: 0, error: 'Failed to fetch data' };
  }
};

export default getMockData;
