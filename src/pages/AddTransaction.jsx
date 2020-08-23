import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transaction } from '../services/Transaction'

const AddTransaction = ({ history }) => {

  const [formData, setFormData] = useState({
    type: 1,
    amount: 0,
    description: ''
  })


  const onSubmit = e => {
    e.preventDefault()
    Transaction.add(formData).then(response => {
      alert('Transaction Saved Successfully')
      history.replace('/')
    }).catch(err => {
      alert('Something went wrong')
    })
  }

  const handleOnChange = e => {
    let data = { ...formData }
    data[e.target.name] = e.target.value
    setFormData(data)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3>Add Transaction</h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={onSubmit} action="" method="post">
            <div className="form-group">
              <select onChange={handleOnChange} value={formData.type} required name="type" className="form-control">
                <option value="">Select Type...</option>
                <option value="0">Debit</option>
                <option value="1">Credit</option>
              </select>
            </div>

            <div className="form-group">
              <input value={formData.amount} onChange={handleOnChange} required placeholder="Amount" className="form-control" type="number" name="amount" />
            </div>

            <div className="form-group">
              <textarea required onChange={handleOnChange} name="description" placeholder="Description" className="form-control" value={formData.description}></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-success">Save</button>
              <Link to="/"><button type="button" className="btn btn-danger ml-2">Cancel</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddTransaction