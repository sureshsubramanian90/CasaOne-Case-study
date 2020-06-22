import RestClient from '../RestClient';

export class exampleApi {
  static getData(params) {
    const config = {
      url: 'https://run.mocky.io/v3/7a82eba3-4116-442a-bfc4-e154e8bbc49c',
      params,
    };
    return RestClient.get(config).then((json) => {
      console.log(`Parsing content ${json}`);
      return json;
    });
  }

  static submitData(params) {
    const config = {
      url: 'https://run.mocky.io/v3/7a82eba3-4116-442a-bfc4-e154e8bbc49c',
      params,
    };
    return RestClient.post(config).then((json) => {
      console.log(`Parsing content ${json}`);
      return json;
    });
  }

  static deleteData(params) {
    const config = {
      url: 'https://run.mocky.io/v3/7a82eba3-4116-442a-bfc4-e154e8bbc49c',
      params,
    };
    return RestClient.delete(config).then((json) => {
      console.log(`Parsing content ${json}`);
      return json;
    });
  }
}
