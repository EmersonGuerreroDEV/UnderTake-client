'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  ContactIcon,
  CreditCardIcon,
  HandCoinsIcon,
  PackageSearchIcon,
  UserIcon
} from 'lucide-react';
import { useRef } from 'react';
import { Button } from '~/core/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/core/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '~/core/components/ui/carousel';
import Wrapper from '~/core/components/ui/wrapper';

const InformationItems = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const InformationHome = [
    {
      title: 'Registro',
      icon: <UserIcon size={50} strokeWidth={1} />,
      description: 'Regístrate y compra sin limites',
      redirect: ''
    },
    {
      title: 'Pago seguro',
      icon: <HandCoinsIcon size={50} strokeWidth={1} />,
      description: 'Paga de manera segura y sin complicaciones',
      redirect: ''
    },
    {
      title: 'Métodos de pago',
      icon: <CreditCardIcon size={50} strokeWidth={1} />,
      description:
        'Puedes pagar con tarjeta de crédito, débito y contra entrega',
      redirect: ''
    },
    {
      title: 'Categorías',
      icon: <PackageSearchIcon size={50} strokeWidth={1} />,
      description: 'Encuentra lo que buscas en nuestras categorías',
      redirect: ''
    },
    {
      title: 'Contactos',
      icon: <ContactIcon size={50} strokeWidth={1} />,
      description: 'Puedes contactarnos en nuestras redes sociales',
      redirect: ''
    }
  ];
  return (
    <div className='relative -mt-44 bg-custom-gradient pb-12 pt-16'>
      <Wrapper>
        <Carousel
          plugins={[plugin.current]}
          className='mx-auto max-w-screen-2xl'
        >
          <CarouselContent>
            {InformationHome.map((item) => {
              return (
                <CarouselItem key={item.title} className='xl:basis-1/5 '>
                  <Card className='mx-auto h-80 max-w-52'>
                    <CardHeader>
                      <CardTitle className='text-center text-lg'>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col items-center justify-start'>
                      <div className='rounded-full bg-slate-50 p-6'>
                        {item.icon}
                      </div>
                      <CardDescription className='mt-1 h-14 text-center text-xs'>
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className=''>Mas información</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Wrapper>
    </div>
  );
};

export default InformationItems;
