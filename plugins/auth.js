export default async function({
    app,
    $auth,
}) {
    console.log('auth executed')
    if (!$auth.loggedIn) {
        return
    }

    const auth = $auth;

    const authStrategy = auth.strategy.name;
    if (authStrategy === 'facebook' || authStrategy === 'google') {
        const token = auth.getToken(authStrategy).substr(7);
        // const authStrategyConverted = authStrategy === 'facebook' ? 'facebook' : 'google';
        const url = `login-${authStrategy}`;

        try {
            app.$axios.setHeader('Authorization', null)
            await app.$axios.$post(url, {
                "access_token": token,

            }).then((res) => {
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
}