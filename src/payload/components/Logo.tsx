/* The Ekuphumuleni marks in the admin: the full logo on the sign-in screen and
   the cradle mark in the navigation. Plain images, so the admin stays
   independent of the site's stylesheets. */

export function Logo() {
  return (
    <div className='eku-login-logo'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/images/brand/ekuphumuleni_mark.svg' alt='' width={96} height={96} />
      <span className='eku-login-logo__name'>Ekuphumuleni</span>
      <span className='eku-login-logo__sub'>Website editor</span>
    </div>
  );
}

export function Icon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src='/images/brand/ekuphumuleni_mark.svg' alt='Ekuphumuleni' width={30} height={30} />
  );
}
