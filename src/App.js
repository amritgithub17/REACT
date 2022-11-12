import "./App.css";
import Card from "./components/Card";

const data = [
 {
  image: "https://www.profitconfidential.com/wp-content/uploads/2020/11/logo-of-apple-inc-on-a-mac-store-hong-kong-2018-03-14_t20_6Yk222.jpg",
  prodName: "Apple",
  _id : 221522,
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis maxime laborum sint nemo, praesentium possimus minus sit tenetur at cum, iusto inventore nulla rerum expedita amet. Porro recusandae esse laborum doloremque fugit corporis?",
  // image: <img src="/src/images/apple.jpg" />
 },
 {
  image: "http://www.aymen-loukil.com/wp-content/uploads/2017/08/Google-images-badges-on-search-min.png",
  prodName: "Google",
  _id : 985252,
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis maxime laborum sint nemo, praesentium possimus minus sit tenetur at cum, iusto inventore nulla rerum expedita amet. Porro recusandae esse laborum doloremque fugit corporis?",
 },
 
 {
  image: "https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2019/04/05/Pictures/books-photo-retail-store-seen-amazon-amazon_16cf7722-578e-11e9-8bc0-bee180be535f.jpg",
  prodName: "Amazon",
  _id : 45632565,
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis maxime laborum sint nemo, praesentium possimus minus sit tenetur at cum, iusto inventore nulla rerum expedita amet. Porro recusandae esse laborum doloremque fugit corporis?",
 },
 {
  image: "https://tse4.mm.bing.net/th?id=OIP.7k2mPJJ5xLVI1lfzQMAqDAHaDg&pid=Api&P=0",
  prodName: "Microsoft",
  _id : 545322,
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis maxime laborum sint nemo, praesentium possimus minus sit tenetur at cum, iusto inventore nulla rerum expedita amet. Porro recusandae esse laborum doloremque fugit corporis?",
 },
];
function App() {
  const title="DREAM COMPANIES"
  return (
    
    <div className="container">
      <h1>{title}</h1> {/*in javascipt comment is written like this and if we want to include JS then use {}*/ }
      <br />
      <div className="row">
        {
          data.map((val,ind) => {
            return(
              <div className="col-12 col-sm-6 col-md-4">
                <Card values={val}/>
              </div>
            )
            
          })
        }
      </div>
    </div>
  );
}

export default App;
