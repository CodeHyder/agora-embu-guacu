const ServiceButton = (imgSrc, children) => {
    return (
        <a className="services__container">
            <img src={imgSrc} alt="" />
            <p className="services__text">{children}</p>
        </a>
    )
}

export default ServiceButton;