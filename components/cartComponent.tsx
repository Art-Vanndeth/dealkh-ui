'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectProducts,
  selectTotalPrice,
} from '@/redux/feature/cart/cartSlice';
import { useEffect, useState } from 'react';
import { CartProductType, ShopPayload } from '@/libs/difinition';
import { Image, InternalForwardRefRenderFunction, Table, TableBody, TableCell, TableColumn, TableHeader, TableProps, TableRow } from '@nextui-org/react';
import { LuMinus, LuPlus, LuTrash } from 'react-icons/lu';
import { Button } from '@nextui-org/button';

export default function CartComponent() {
  const products = useAppSelector(selectProducts);
  const totalPrice = useAppSelector(selectTotalPrice);

  const dispatch = useAppDispatch();

  // Display number of product that only unique select
  const [uniqueProducts, setUniqueProducts] = useState<CartProductType[]>([]);

  useEffect(() => {
    // Filter unique products based on their IDs
    const unique = products.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t.slug === product.slug)
    );

    // Update the state with the unique products
    setUniqueProducts(unique);
  }, [products]);

  const handleIncrementQuantity = (product: CartProductType) => {
    dispatch(incrementQuantity(product.slug));
  };

  const handleDecrementQuantity = (product: CartProductType) => {
    dispatch(decrementQuantity(product.slug));
  };

  const handleRemoveFromCart = (product: CartProductType) => {
    dispatch(removeFromCart(product.slug));
  };

  const renderCell = (product: CartProductType,columnKey: string) => {
    switch (columnKey) {
      case 'image':
        return (
          <div className="flex items-center">
            <Image src={product.images?.[0]?.url ||
                          'https://imgs.search.brave.com/8YEIyVNJNDivQtduj2cwz5qVVIXwC6bCWE_eCVL1Lvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzQ3Lzk1/LzM2MF9GXzU5NzQ3/OTU1Nl83YmJRN3Q0/WjhrM3hiQWxvSEZI/VmRaSWl6V0sxUGRP/by5qcGc'} width={50} height={50} alt={product.name} />
          </div>
        );
      case 'name':
        return <div>{product.name.length > 30
          ? `${product.name.substring(0, 26)}...`
          : product.name || "Product Name"} 
          </div>;
      case 'shop':
        return <div>{product.shop}</div>;
      case 'location':
        return <div>{product.address || 'N/A'}</div>      
      case 'price':
        return <div>${product.price}</div>;
      case 'discount price':
        return <div>${product.discountPrice}</div>  
      case 'quantity':
        return (
          <div className="flex items-center">
             {/* increase button */}
             <div className="flex ">
                        <div className="flex h-8 w-8 items-center justify-center rounded-l-lg border">
                          <LuPlus
                            onClick={() =>
                              dispatch(incrementQuantity(product.slug))
                            }
                          />
                        </div>

                        <div className="flex h-8  w-8 items-center justify-center border">
                          <span>{product.quantity}</span>
                        </div>

                        <div className=" flex h-8  w-8 items-center justify-center rounded-r-lg border">
                          <LuMinus
                            onClick={() =>
                              dispatch(decrementQuantity(product.slug))
                            }
                          />
                        </div>
                      </div>
          </div>
        );
      case 'total':
        return (
          <div>
            ${product.discountPrice * (product.quantity || 1)}
          </div>
        );
      case 'delete':
        return (
          <div className="flex justify-center">
            <Button
                          isIconOnly
                          onClick={() =>
                            dispatch(removeFromCart(product.slug))
                          }
                          className="rounded-xl bg-red-500 p-2 text-white"
                        >
                          <LuTrash />
                        </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center ">
          <Image
            alt="cartEmpty"
            src={'https://store.istad.co/media/product_images/cartEmpty.png'}
            width={200}
            height={200}
          />
          <p className="mt-4 text-2xl font-semibold ">Your cart is empty!</p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>Look like you haven't make any choice yet...</p>
        </div>
      )}
  
      {products.length !== 0 && (
        <div>
          <div className="col-span-3 p-4">
            <div className="flex justify-between">
              <p className="relative w-fit text-[20px] font-bold text-foreground-700 after:absolute after:bottom-[-4px] after:left-0 after:h-[3px] after:w-full after:bg-[#eab308]  lg:text-[26px]">
                Your <span className="text-[#eb7d52]">Cart</span>
              </p>
            </div>
  
            <Table aria-label="Cart" className='mt-8'>
              <TableHeader  columns={[
                { uid: 'image', name: 'Image' },
                { uid: 'name', name: 'Name' },
                { uid: 'shop', name: 'Shop Name' },
                { uid: 'location', name: 'Location' },
                { uid: 'price', name: 'Price' },
                { uid: 'discount price', name: 'Discount Price' },
                { uid: 'quantity', name: 'Quantity' },
                { uid: 'total', name: 'Total' },
                { uid: 'delete', name: 'Remove' },
              ]}>
                {(column) => (
                  <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={uniqueProducts}>
                {(product) => (
                  <TableRow key={product.slug}>
                    {(columnKey) => <TableCell>{renderCell(product,columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end mt-4">
            <div>
              <div>Total Price: ${totalPrice}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

