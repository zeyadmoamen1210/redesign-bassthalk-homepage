export default async function({
    $auth,
    redirect,

}) {
    let user = $auth.user;
    if (!user) {
        redirect('/login')

    } else if (user && user.role == "student") {

    } else {

        redirect('/')
    }
}