class Helpers {
  static formatCurrency = (v: number, showFree: boolean = false) => {
    let value = v;

    if (typeof v != 'number' || isNaN(v)) {
      value = 0;
    }

    if (value == 0) {
      return showFree ? 'Gratis' : '0';
    }

    const options = {
      style: 'currency',
      currency: 'COP'
    };
    const numberFormat = new Intl.NumberFormat('es-CO', options);
    return numberFormat.format(value).split(',')[0];
  };

  static responsiveSurvey = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  static SwitchStatus = (status: string) => {
    switch (true) {
      case status === 'approbated':
        return 'bg-green-500';
      case status === 'active':
        return 'bg-green-500';
      case status === 'pending':
        return 'bg-yellow-400';
      case status === 'reject':
        return 'bg-red-400';

      default:
        return; // or whatever default behavior you want
    }
  };

  static SwitchStatusText = (status: string) => {
    switch (true) {
      case status === 'approbated':
        return 'Aprobado';
      case status === 'active':
        return 'Aprobado';
      case status === 'pending':
        return 'Pendiente';
      case status === 'reject':
        return 'Rechazado';

      default:
        return; // or whatever default behavior you want
    }
  };
}
export default Helpers;
