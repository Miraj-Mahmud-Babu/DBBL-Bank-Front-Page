$('#nav a, .btn').on('click', Function(Event))
{
    if(this.hash !== '')
        {
            event.preventDefault();
            const hash = this.hash;
        }
    $('html,body').animate(
    {
        scrollTop: $(hash).offset().top -100
    },
    800
    );
}