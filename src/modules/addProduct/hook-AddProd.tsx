import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {AUTORIZATION_KEY} from '../../shared/autorizationConstant';
import {getItemStorage} from '../../shared/storageProxy';

export type ProductCategory = {
  id: number;
  name: string;
};

const listOfCategories: ProductCategory[] = [
  {id: 1, name: 'Electronics'},
  {id: 2, name: 'Clothing'},
  {id: 3, name: 'Books'},
  {id: 4, name: 'Toys'},
];

export default function useProductRegistration() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [productImage, setProductImage] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>();
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const handleOnChangeProductName = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setName(event.nativeEvent.text);
  };

  const handleOnChangeProductPrice = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setPrice(event.nativeEvent.text);
  };

  const handleOnChangeProductImage = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setProductImage(event.nativeEvent.text);
  };

  const handleOnChangeProductCategory = (sCategory: ProductCategory) => {
    setSelectedCategory(sCategory);
  };

  const fetchAllCategories = useCallback(async (): Promise<
    ProductCategory[]
  > => {
    return new Promise(resolve => {
      resolve(listOfCategories);
    });
  }, []);

  const submitProductRegistration = async () => {
    const token = await getItemStorage(AUTORIZATION_KEY);
    console.log('aqui', name, price);

    await axios
      .post(
        'http://192.168.137.49:8080/product',
        {
          name,
          price: parseFloat(price),
          image: 'abcd',
          categoryId: 1,
        },
        {
          headers: {
            Authorization: token as string,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    (async () => {
      await fetchAllCategories()
        .then(res => setCategories(res))
        .catch(err => console.error(err));
    })();
  }, [fetchAllCategories]);

  return {
    name,
    price,
    productImage,
    selectedCategory,
    categories,
    handleOnChangeProductName,
    handleOnChangeProductPrice,
    handleOnChangeProductImage,
    handleOnChangeProductCategory,
    submitProductRegistration,
  };
}
