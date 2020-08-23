import React from 'react'

const TransactionItem = ({ item }) => (
  <tr>
    <td>{item.created}</td>
    <td>{item.description}</td>
    <td>{item.type && item.amount}</td>
    <td>{!item.type && item.amount}</td>
    <td>{item.balance}</td>
  </tr>
)

export default TransactionItem