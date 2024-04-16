// static method & property

class Product {

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    static build(name, price){
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product){
        return (product.price * 0.1) + product.price;
    }


}

class DeposableProduct extends Product {
    depose(){
        this.depose = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);


// 정적 속성
class ProductWithCode {

    // 정적속성
    static get CODE_PREFIX() {
        return "PRODUCT-";
    }
}
console.log(ProductWithCode.CODE_PREFIX);