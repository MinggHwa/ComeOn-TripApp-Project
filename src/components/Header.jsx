import { useNavigate } from 'react-router-dom';

function Header({ back, logo, className, title, search, cart }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className='sticky top-0 z-50 mx-auto flex h-14 max-w-3xl items-center justify-between bg-white px-4'>
      <div className='flex'>
        {back && (
          <button type='button' onClick={handleBack}>
            <img src='/back.svg' alt='뒤로가기' />
          </button>
        )}
        {logo && <img src='/logo.svg' alt='로고' />}
      </div>
      <h2 className={className}>{title}</h2>
      <div className='flex gap-4'>
        {search && <img src='/search.svg' alt='검색' />}
        {cart && <img src='/cart.svg' alt='장바구니' />}
      </div>
    </header>
  );
}
export default Header;
