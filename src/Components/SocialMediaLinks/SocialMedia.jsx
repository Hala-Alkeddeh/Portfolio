let Socials=[
    {id:1, text: 'Github', icon:'fa-brands fa-github', href:'http://github/hala-alkeddeh'},
    {id:2, text: 'Facebook', icon:'fa-brands fa-facebook', href:'https://facebook.com/hala.alkeddeh.7'},
    {id:3, text: 'Instagram', icon:'fa-brands fa-instagram', href:'https://instagram.com/7ala_alkeddeh'},
    {id:4, text: 'Telegram', icon:'fa-brands fa-telegram', href:'https://t.me/Hala_Kd'},
    {id:5, text: 'PhoneNumber', icon:'fa-solid fa-phone', href:'tel:+963952633707'},
    {id:6, text: 'Email', icon:'fa-solid fa-envelope', href:'mailto:Halakeddeh2002@gmail.com'},
] ;

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-2">
        {Socials.map(social => (
        <a key={social.id} href={social.href} className='hover:bg-gradient-to-l centered w-8 h-8 md:w-10 md:h-10 gradiant rounded-full text-lightColor text-base md:text-lg hover:-translate-y-3 border-2 border-lightColor transitio duration-500'>
          <i className={social.icon} ></i>
        </a>
    ))}
    </div>
  )
}

export default SocialMedia