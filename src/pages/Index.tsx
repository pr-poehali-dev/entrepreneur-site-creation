import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const achievements = [
    {
      year: '2010',
      title: 'Начало карьеры',
      description: 'Начало профессионального пути в сфере безопасности'
    },
    {
      year: '2015',
      title: 'Основание ЧСБ Холдинг',
      description: 'Создание частного охранного предприятия "ЧСБ Холдинг"'
    },
    {
      year: '2022',
      title: 'Лучший ЧОП России',
      description: 'Компания "ЧСБ Холдинг" признана лучшим частным охранным предприятием России'
    },
    {
      year: '2022',
      title: 'Расширение географии',
      description: 'Обеспечение безопасности на новых территориях Российской Федерации'
    },
    {
      year: '2024',
      title: 'Цифровизация',
      description: 'Внедрение современных технологий и систем безопасности нового поколения'
    },
    {
      year: '2025',
      title: 'Государственная служба',
      description: 'Исполняющий обязанности главы сельского поселения "село Чирката" Гумбетовского района Республики Дагестан'
    }
  ];

  const services = [
    {
      icon: 'ShieldCheck',
      title: 'Физическая охрана',
      description: 'Профессиональная охрана объектов любой сложности'
    },
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Установка и мониторинг систем видеонаблюдения'
    },
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Современные системы контроля и управления доступом'
    },
    {
      icon: 'AlertTriangle',
      title: 'Сигнализация',
      description: 'Охранные и пожарные системы сигнализации'
    },
    {
      icon: 'Users',
      title: 'Личная охрана',
      description: 'Обеспечение безопасности VIP-персон'
    },
    {
      icon: 'Truck',
      title: 'Сопровождение грузов',
      description: 'Профессиональное сопровождение ценных грузов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" size={32} className="text-secondary" />
              <h1 className="text-2xl font-bold text-primary">Загидов Абдулазиз Магомедов</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Достижения
              </button>
              <button
                onClick={() => scrollToSection('business')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Бизнес
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <p className="text-secondary font-semibold">Предприниматель • Руководитель ЧСБ Холдинг</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Загидов Абдулазиз<br />Магомедов
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Основатель и генеральный директор ЧОП "ЧСБ Холдинг" — 
                лучшего частного охранного предприятия России. 
                Создаю безопасное будущее для бизнеса и людей.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contacts')}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Связаться
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('business')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-lg blur-2xl"></div>
                <img
                  src="https://cdn.poehali.dev/files/8dd72695-86e1-46e0-95a6-db381869013c.jpeg"
                  alt="Загидов Абдулазиз Магомедов"
                  className="relative rounded-lg shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Обо мне</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Лидер отрасли</h3>
                <p className="text-center text-muted-foreground">
                  ЧОП "ЧСБ Холдинг" признан лучшим в России
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Target" size={32} className="text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Стратегическое мышление</h3>
                <p className="text-center text-muted-foreground">
                  Расширение географии работы по всей России
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Zap" size={32} className="text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Инновации</h3>
                <p className="text-center text-muted-foreground">
                  Внедрение передовых технологий безопасности
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
              Мой путь в сфере безопасности начался более 15 лет назад. За это время я прошёл 
              путь от рядового специалиста до основателя крупнейшего частного охранного предприятия.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4 text-lg">
              В 2015 году я основал компанию "ЧСБ Холдинг", которая сегодня признана 
              лучшим частным охранным предприятием России. С 2022 года мы успешно 
              обеспечиваем безопасность на новых территориях Российской Федерации.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Моя миссия — создавать надёжные системы безопасности, которые защищают людей, 
              бизнес и будущее. Я верю в профессионализм, инновации и честность в работе.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Путь к успеху</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-secondary hover:shadow-lg transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary">{achievement.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-primary mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-lg">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">ЧОП "ЧСБ Холдинг"</h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Лучшее частное охранное предприятие России с 2022 года
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6">О компании</h3>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                "ЧСБ Холдинг" — это крупнейшее частное охранное предприятие, 
                которое обеспечивает комплексную безопасность объектов по всей России. 
                Мы работаем с государственными структурами, крупным бизнесом и частными клиентами.
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                Наша компания признана лучшим ЧОП России благодаря профессионализму команды, 
                современному оборудованию и инновационным подходам к обеспечению безопасности.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0" />
                  <p className="text-foreground/90 text-lg">Работа на новых территориях РФ</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0" />
                  <p className="text-foreground/90 text-lg">Государственные и коммерческие проекты</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0" />
                  <p className="text-foreground/90 text-lg">Передовые технологии безопасности</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
                <CardContent className="p-6 text-center">
                  <Icon name="Trophy" size={40} className="text-secondary mx-auto mb-3" />
                  <p className="text-4xl font-bold text-secondary mb-2">#1</p>
                  <p className="text-foreground/80 font-medium">ЧОП России</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={40} className="text-primary mx-auto mb-3" />
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-foreground/80 font-medium">Регионов РФ</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
                <CardContent className="p-6 text-center">
                  <Icon name="Users" size={40} className="text-secondary mx-auto mb-3" />
                  <p className="text-4xl font-bold text-secondary mb-2">500+</p>
                  <p className="text-foreground/80 font-medium">Сотрудников</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                <CardContent className="p-6 text-center">
                  <Icon name="Building" size={40} className="text-primary mx-auto mb-3" />
                  <p className="text-4xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-foreground/80 font-medium">Объектов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Наши услуги</h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Полный спектр услуг по обеспечению безопасности
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-all hover:shadow-lg">
                <CardContent className="pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
                  <p className="text-center text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h2>
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">info@chsbholding.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (800) 555-00-00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Головной офис</p>
                        <p className="font-medium">ЧОП "ЧСБ Холдинг"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-muted-foreground mb-6 text-lg">
                    Открыт к сотрудничеству с бизнесом и государственными структурами. 
                    Готов обсудить любые проекты в сфере безопасности.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Загидов Абдулазиз Магомедов. ЧОП "ЧСБ Холдинг" — Лучшее ЧОП России</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;