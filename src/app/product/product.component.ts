import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"商品1",2.5,3.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","硬件产品"]),
      new Product(2,"商品1",3.5,2.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","软件产品"]),
      new Product(3,"商品1",4.5,3.8,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","移动产品"]),
      new Product(4,"商品1",5.5,2.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","游戏产品"]),
      new Product(5,"商品1",2.1,3.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","手机产品"]),
      new Product(6,"商品1",2.2,3.3,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","影视娱乐"]),
      new Product(7,"商品1",2.3,1.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","单机游戏"]),
      new Product(8,"商品1",4.5,3.0,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","CHECKEN"]),
      new Product(9,"商品1",2.3,7.5,"我是测试中的商品，只要显示样式就好，具体我不管",["电子商品","LOL"]),
    ]
  }

}

// 此处声明商品数据类 
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
