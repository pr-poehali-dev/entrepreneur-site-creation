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
      year: '2018',
      title: 'Основание компании',
      description: 'Создание частного охранного предприятия с командой из 15 специалистов'
    },
    {
      year: '2020',
      title: 'Расширение бизнеса',
      description: 'Открытие филиалов в 5 городах региона, штат вырос до 150+ сотрудников'
    },
    {
      year: '2025',
      title: 'Глава сельского поселения',
      description: 'Исполняющий обязанности главы сельского поселения "село Чирката" Гумбетовского района Республики Дагестан'
    },
    {
      year: '2022',
      title: 'Лидер рынка',
      description: 'Признание лучшим ЧОП региона по версии профессионального сообщества'
    },
    {
      year: '2024',
      title: 'Инновации',
      description: 'Внедрение AI-систем мониторинга и современных технологий безопасности'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Загидов Абдулазиз Магомедович</h1>
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
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Загидов Абдулазиз<br />Магомедович
              </h2>
              <p className="text-xl text-muted-foreground mb-4">Предприниматель</p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Основатель и руководитель частного охранного предприятия. 
                Специализируюсь на создании комплексных систем безопасности для бизнеса.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="bg-secondary hover:bg-secondary/90"
              >
                Связаться
              </Button>
            </div>
            <div className="flex justify-center animate-fade-in">
              <img
                src="https://cdn.poehali.dev/files/8dd72695-86e1-46e0-95a6-db381869013c.jpeg"
                alt="Загидов Абдулазиз Магомедович"
                className="rounded-lg shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Обо мне</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-secondary transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Shield" size={48} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Надежность</h3>
                <p className="text-center text-muted-foreground">
                  Более 15 лет опыта в сфере безопасности и управления бизнесом
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Users" size={48} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Лидерство</h3>
                <p className="text-center text-muted-foreground">
                  Построил команду из 150+ профессионалов своего дела
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Icon name="TrendingUp" size={48} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Инновации</h3>
                <p className="text-center text-muted-foreground">
                  Внедряю современные технологии в традиционный бизнес
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Начинал карьеру с работы в структурах безопасности, где получил фундаментальные 
              знания и практический опыт. В 2018 году основал собственное частное охранное предприятие, 
              которое быстро заняло лидирующие позиции на региональном рынке.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Моя философия бизнеса — сочетание проверенных методов работы с инновационными 
              технологиями. Верю в профессионализм команды и постоянное развитие.
            </p>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Достижения</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name="Award" size={32} className="text-secondary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-3xl font-bold text-secondary">{achievement.year}</span>
                        <h3 className="text-2xl font-semibold text-primary">{achievement.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-lg">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="py-20 px-4 bg-card text-foreground">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Бизнес</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Частное Охранное Предприятие</h3>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                Предоставляем полный спектр услуг по обеспечению безопасности для бизнеса и частных лиц. 
                Работаем с крупнейшими компаниями региона, обеспечивая надежную защиту их активов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">Физическая охрана объектов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">Установка и мониторинг систем безопасности</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">Консультации по вопросам безопасности</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">Сопровождение грузов и VIP-персон</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-muted/30 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">150+</p>
                  <p className="text-foreground/80">Сотрудников</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">200+</p>
                  <p className="text-foreground/80">Клиентов</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">5</p>
                  <p className="text-foreground/80">Филиалов</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">6</p>
                  <p className="text-foreground/80">Лет на рынке</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h2>
          <Card className="border-2">
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
                        <p className="font-medium">info@zagidov.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Офис</p>
                        <p className="font-medium">Центральный офис</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-muted-foreground mb-6">
                    Открыт к новым возможностям сотрудничества и партнерства. 
                    Готов обсудить любые вопросы, связанные с безопасностью бизнеса.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Написать письмо
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Загидов Абдулазиз Магомедович. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;