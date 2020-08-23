import React, { useEffect, useState } from 'react'
import TransactionList from '../components/TransactionList'
import { Transaction } from '../services/Transaction'
import { Link } from 'react-router-dom'

const Home = () => {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    Transaction.list().then(response => {
      setTransactions(response.data.data.transactions)
    })
  }, [])

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="top-bar d-flex justify-content-between">
          <h3>Transactions List</h3>
          <Link to="/transactions/add">
            <button className="btn btn-sm btn-primary">Add Transaction</button>
          </Link>
        </div>
      </div>

      <div className="col-md-12 mt-2">
        <TransactionList items={transactions} />
      </div>
    </div>

  )
}

export default Home