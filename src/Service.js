import React from "react"
import web from '../src/images/sap1.jpg'
import Card from "./Card"
import Sdata from "./Sdata";

function Service() {
  return (
    <React.Fragment>
      <div className="my-5">
            <h1 className="text-center">Our Services</h1>
      </div>
      <div className="contaner-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val,ind) => {
                                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} saplink={val.saplink} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
  );
}

export default Service;
