export default async function({
    $auth,
    app,
    redirect,

}) {

    if (!$auth.loggedIn) {
        redirect('/login')

    } else {
        const auth = $auth;

        const authStrategy = auth.strategy.name;
            if (authStrategy === 'facebook' || authStrategy === 'google') {
                const token = auth.getToken(authStrategy).substr(7);
                // const authStrategyConverted = authStrategy === 'facebook' ? 'facebook' : 'google';
                const url = `login-${authStrategy}`;

                try {
                    let myUrl = {};
                    if(url == 'login-google'){
                        myUrl.access_token = token;
                    }else if(url == 'login-facebook'){
                        myUrl.accessToken = token;
                    }
                    app.$axios.setHeader('Authorization', null)
                    await app.$axios.$post(url, myUrl).then((res) => {
                        console.log("After login", res)
                        auth.setToken('local', "Bearer " + res.token);
                        setTimeout(async() => {
                            auth.setStrategy('local');
                            setTimeout(async() => {
                                await auth.fetchUser();
                            })
                        });
                    });
                    // console.log(data)

                } catch (e) {
                    console.log(e);
                }
            }



        // try {
        //     const token = $auth.getToken(authStrategy).substr(7)

        //     app.$axios
        //         .$post('login-google', {
        //             access_token: token,
        //         })
        //         .then((res) => {
        //             console.log('After login', res)
        //             auth.setToken('local', 'Bearer ' + res.token)
        //             setTimeout(async() => {
        //                 $auth.setStrategy('local')
        //                 setTimeout(async() => {
        //                     await $auth.fetchUser()
        //                 })
        //             })
        //         })
        //         // console.log(data)
        // } catch (e) {
        //     console.log(e)
        // }

    }
}


// 

//