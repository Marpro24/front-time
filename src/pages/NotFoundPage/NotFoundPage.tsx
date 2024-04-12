import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <img
        className="not-found__post-it"
        src="/images/404-background.webp"
        alt="post it con chincheta"
        width={500}
        height={500}
      />
      <h1 className="not-found__text not-found__text-text">
        Página no encontrada
      </h1>
      <h2 className="not-found__text not-found__text-404">404</h2>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
