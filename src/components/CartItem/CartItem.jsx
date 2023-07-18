import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr className="">
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <span onClick={deleteFromCart}>
          <BiTrash />
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
