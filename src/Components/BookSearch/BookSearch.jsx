import React from "react";

const BookSearch = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Book Search</h4>
          {/* <h6>Book</h6> */}
          <div className="row">
            {/* <div className="col"> */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Book
              </label>
              <input type="text" class="form-control" id="" />
            </div>
            {/* </div> */}
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-primary float-end">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
