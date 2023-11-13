'use client'
import UnderLineText from "@/components/UnderLineText";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { IProduct } from "@/types/product";
import { useTypedSelector } from "@/redux/store";

interface Props {
  item: IProduct;
}

const AddToCart = ({item}:Props) => {
  const dispatch = useDispatch();
  const cart = useTypedSelector(x => x.cart.cart);

  let include = false;
  for (const x of cart) {
    if (x.product === item) {
      include = true;
      break;
    }
  }

  const handleOnClick = () => {
    if (include) {
      dispatch(removeFromCart(item.id))
    } else {
      dispatch(addToCart({ product: item, count: 1 }))
    }
  }

  return (
    <div className="mt-2" onClick={handleOnClick}>
      <UnderLineText color="#131313" height={2}>
        {include ? <p>REMOVE FROM CART</p> : <p>ADD TO CART</p>}

        <div className="absolute -bottom-1 w-full h-[2px] bg-[#ffffff] z-10" />
      </UnderLineText>
    </div>
  );
};

export default AddToCart;