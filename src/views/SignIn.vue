<template>
  <main class="form-signin">
    <form @submit.stop.prevent="submit">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          v-model="email"
          placeholder="name@example.com"
        />
        <label for="floatingInput"></label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="password"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3"></div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>      
    </form>
  </main>
</template>

<script>
import Cookie from 'js-cookie';
export default {
  name: "SignIn",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      fetch("http://localhost:8000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
            Cookie.set('__mytoken', res.access_token.token);
            //Cookie.set('__User', res.access_token.user);

            localStorage.setItem('user', JSON.stringify(res.access_token.user));

          this.$router.replace('/');
        });
    },
  },
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>