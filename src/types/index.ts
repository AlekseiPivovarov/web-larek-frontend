import { ApiListResponse } from "../components/base/api";

type ProductList = ApiListResponse<IDataProduct>;
type BasketItems = IDataProduct["id"][];

export interface IDataProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number;
}

export interface IDataForm {
    payment: string;
    address: string;
    email: string;
    phone: string;
    total: number;
}

export interface ICatalog {
    items: ProductList;
    setItems():void;  //Получить каталог из api
    getItems(): IDataProduct[];  //Получить список items;
}

export interface IProductCart extends IDataProduct {
    addInBasket(): void;
    deleteFromBasket(): void;
}

export interface IBasket {
    items: IDataProduct[];
    total: number;
    getBasketItems():BasketItems; //Поулчить список id товаров в корзине
}

export interface IDataOrder extends IDataForm {
    items: BasketItems;
    sendOrder(): void; //Отправить заказ
}

//Отображение
export interface IView<T> {
    element: HTMLElement;
    render(data?: T): HTMLElement;
}

export interface IViewCart extends IView<IDataProduct> {
    type: 'Main' | 'Modal' | 'Basket';
}

