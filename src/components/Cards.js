import React from "react";

export default function Cards() {
  return (
    <div>
      <div>
        <div class="card mt-5" style={{ width: "18rem", maxWidth: "360px" }}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <div className='container w-100'>
                <select className="m-2 bg-success h-100 rounded">
                    {Array.from(Array(6),(e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })}
                </select>
                <select className="m-2 bg-success h-100 rounded">
                    <option>
                        Half
                    </option>
                    <option>
                        Full
                    </option>
                </select>
                <div className="d-inline fs-5 h-100">
                    Price
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
