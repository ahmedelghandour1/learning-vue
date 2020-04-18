const template =  /*html*/
      `
<ul class="nav nav-tabs">
  <li class="nav-item">
        <router-link exact class="nav-link" to="/" active-class="active">Home</router-link>
  </li>
  <li class="nav-item">
        <router-link class="nav-link" to="/user" active-class="active">User</router-link>
  </li>
</ul>
`;

export default {
      name: 'Header',
      template
}