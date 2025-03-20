    <template>
        <aside class="menu has-background-dark has-text-light p-4 is-fullheight">
        <p class="menu-label has-text-grey-light">General</p>
        <ul class="menu-list">
            <li>
            <router-link to="/dashboard" class="is-flex is-align-items-center sidebar-item">
                <span>Dashboard</span>
            </router-link>
            </li>
        </ul>
    
        <p class="menu-label has-text-grey-light">Examples</p>
        <ul class="menu-list">
            <li>
            <router-link to="/tables" class="is-flex is-align-items-center sidebar-item">
                <span>Tables</span>
            </router-link>
            </li>
            <li>
            <router-link to="/forms" class="is-flex is-align-items-center sidebar-item">
                <span>Forms</span>
            </router-link>
            </li>
            <li>
            <router-link to="/profile" class="is-flex is-align-items-center sidebar-item">
                <span>Profile</span>
            </router-link>
            </li>
            <li>
            <router-link to="/login" class="is-flex is-align-items-center sidebar-item">
                <span>Login</span>
            </router-link>
            </li>
            <li>
            <router-link to="/submenus" class="is-flex is-align-items-center sidebar-item">
                <span>Submenus</span>
            </router-link>
            </li>
        </ul>
    
        <p class="menu-label has-text-grey-light">About</p>
        <ul class="menu-list">
            <li>
            <router-link to="/premium" class="is-flex is-align-items-center sidebar-item">
                <span>Premium</span>
            </router-link>
            </li>
            <li>
            <router-link to="/github" class="is-flex is-align-items-center sidebar-item">
                <span>GitHub</span>
            </router-link>
            </li>
        </ul>
        </aside>
    </template>
    
  <style scoped>

    li{
        list-style-type: none;
    }

  .menu {
    width: 260px;
  }
  
  .sidebar-item {
    padding: 10px;
    border-radius: 5px;
    transition: background 0.3s;
  }
    
  .icon {
    margin-right: 8px;
  }
  
  </style>
  