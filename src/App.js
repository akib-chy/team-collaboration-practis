import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* user: noman */}
          <div class="card w-full bg-green-50 border shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://avatars.githubusercontent.com/u/67538033?v=4"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Md.Abdullah Al Noman</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>

          {/* user: Shahadat */}
          <div class="card w-full bg-green-50 border shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://avatars.githubusercontent.com/u/96824476?v=4"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Md. Shahadat Hossain</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
