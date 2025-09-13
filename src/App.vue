<template>
  <div class="container">
    <header>
      <h1>Family Budget</h1>
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/transactions">Transactions</RouterLink>
        <RouterLink to="/budgets">Budgets</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
