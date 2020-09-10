## Expense Tracker

Every application created in React will essentially have various components that make up the whole application. More often than not, these components will need to have access to same data.

For example, this Expense Tracker has a form that captures transactions from the users. Then there is a component that shows closing balance, one displays income and expense totals separately and another exhibits the history of all transactions. These components must have access to all the transactions to achieve this. One way is to do "props drilling" to pass the data to every component. However, a more elegant way is to use **Context API**.

Context API enables us to have the data available to all the components within a component-tree. In other words, it can create *global variables* that can be accessed by any node of a particular component-tree.

This project achieves to
- provide intuitive UI for the users
- add new income and expense transactions
- show overall balance as well as separate income and expense totals
- display transactions history
- delete transactions
- reflect the effect of adding or deleting a transaction on totals

Expense Tracker is deployed on *Surge* [at this link](http://context-api-expense-tracker.surge.sh/)

<hr/>

###### Repository created as part of [Bootcamp 2020](https://github.com/panacloud/bootcamp-2020) online sessions
