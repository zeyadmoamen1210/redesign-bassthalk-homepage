export default async function({
    $auth,
    app,
    redirect,

}) {

    if (!$auth.loggedIn) {
        redirect('/login')

    } else {
        try {
            const token = $auth.getToken(authStrategy).substr(7)

            app.$axios
                .$post('login-google', {
                    access_token: token,
                })
                .then((res) => {
                    console.log('After login', res)
                    auth.setToken('local', 'Bearer ' + res.token)
                    setTimeout(async() => {
                        $auth.setStrategy('local')
                        setTimeout(async() => {
                            await $auth.fetchUser()
                        })
                    })
                })
                // console.log(data)
        } catch (e) {
            console.log(e)
        }

    }
}


// 

//