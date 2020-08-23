import React from 'react'
import TransactionItem from './TransactionItem'
import NoTransactions from './NoTransactions'

const TransactionList = ({ items }) => (
  <table className="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Running Balance</th>
      </tr>
    </thead>
    <tbody>
      {
        items.length ? items.map(item => (
          <TransactionItem key={item._id} item={item} />
        )) : <NoTransactions />
      }
    </tbody>
  </table>
)

export default TransactionList