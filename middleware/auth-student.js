export default async function({
    $auth,
    redirect,

}) {
    let user = $auth.user;
    if (!$auth.loggedIn) {
        redirect('/login')

    } else {
        // if ($auth.user.role == 'student') {

        // } else {

        //     redirect('/')
    }
}