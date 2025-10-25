import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Свяжитесь с нами</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Send" className="text-primary" />
                  Отправьте нам сообщение
                </CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Тема обращения *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите тему</option>
                      <option value="order">Заказ букета</option>
                      <option value="consultation">Консультация</option>
                      <option value="event">Оформление мероприятия</option>
                      <option value="cooperation">Сотрудничество</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Наш адрес
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    г. Москва, ул. Цветочная, д. 15<br />
                    ТЦ "Флора", 2 этаж
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Icon name="Map" size={48} className="mx-auto mb-2" />
                      <p className="text-sm">Карта</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Часы работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Суббота</span>
                      <span className="font-medium">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Воскресенье</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-cormorant flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <div>
                      <p className="font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Основной номер</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <div>
                      <p className="font-medium">info@floristry.ru</p>
                      <p className="text-sm text-muted-foreground">Email для заказов</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="text-primary" />
                    <div>
                      <p className="font-medium">@floristry_art</p>
                      <p className="text-sm text-muted-foreground">Telegram</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShoppingCart" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Индивидуальный заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Создадим букет по вашему эскизу или фотографии. Любая сложность и размер.
                </p>
                <Button variant="outline" className="w-full">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Оформление событий</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Свадьбы, корпоративы, дни рождения. Полное флористическое оформление.
                </p>
                <Button variant="outline" className="w-full">Узнать больше</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-cormorant">Мастер-классы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Обучение флористике для начинающих и профессионалов. Группы и индивидуально.
                </p>
                <Button variant="outline" className="w-full">Записаться</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="font-cormorant text-center">Социальные сети</CardTitle>
              <CardDescription className="text-center">Следите за нами и вдохновляйтесь</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 rounded-full bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-md">
                  <Icon name="Instagram" size={24} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-md">
                  <Icon name="Facebook" size={24} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-md">
                  <Icon name="Twitter" size={24} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white hover:bg-primary hover:text-white transition-colors flex items-center justify-center shadow-md">
                  <Icon name="Youtube" size={24} />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
