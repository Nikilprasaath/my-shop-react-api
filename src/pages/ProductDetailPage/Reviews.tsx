import { IReview } from '../../models/IProduct'

const Reviews:React.FC<IReview|any> = ({reviews}) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Product Reviews</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {
            reviews !== undefined ?
            reviews.map((rev:IReview)=>{
                return(
                    <div key={rev.name}>
                        <p>Name: {rev.name}</p>
                        <p>Rating: {rev.productRating.toString()}</p>
                        <p>Feedback: {rev.feedback}</p>
                        <hr/>
                    </div>
                )
            }) : null
          }
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews