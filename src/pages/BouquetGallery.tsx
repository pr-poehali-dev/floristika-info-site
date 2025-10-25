import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const BouquetGallery = () => {
  const [selectedStyle, setSelectedStyle] = useState('all');

  const bouquets = [
    { 
      name: 'Нежность рассвета', 
      style: 'classic', 
      colors: 'Розовые и кремовые тона',
      flowers: 'Розы, пионы, эустома',
      occasion: 'Свадьба, романтика'
    },
    { 
      name: 'Королевский', 
      style: 'classic', 
      colors: 'Красный и белый',
      flowers: 'Розы, лилии',
      occasion: 'Юбилей, торжество'
    },
    { 
      name: 'Авангард', 
      style: 'modern', 
      colors: 'Контрастные неоновые',
      flowers: 'Протея, стрелиция, антуриум',
      occasion: 'Креативное событие'
    },
    { 
      name: 'Графика', 
      style: 'modern', 
      colors: 'Черно-белая гамма',
      flowers: 'Калла, эустома, эрингиум',
      occasion: 'Модное мероприятие'
    },
    { 
      name: 'Монохром', 
      style: 'minimal', 
      colors: 'Белый',
      flowers: 'Белые розы',
      occasion: 'Минимализм, элегантность'
    },
    { 
      name: 'Скандинавия', 
      style: 'minimal', 
      colors: 'Зеленые оттенки',
      flowers: 'Эвкалипт, суккуленты',
      occasion: 'Современный интерьер'
    },
    { 
      name: 'Весенний сад', 
      style: 'classic', 
      colors: 'Пастельные весенние',
      flowers: 'Тюльпаны, ранункулюсы, фрезии',
      occasion: 'Весенний праздник'
    },
    { 
      name: 'Осенняя симфония', 
      style: 'classic', 
      colors: 'Теплые оранжево-бордовые',
      flowers: 'Георгины, хризантемы',
      occasion: 'Осенняя свадьба'
    },
    { 
      name: 'Футуризм', 
      style: 'modern', 
      colors: 'Металлик и синий',
      flowers: 'Эрингиум, орхидеи',
      occasion: 'Технологичное событие'
    },
    { 
      name: 'Воздух', 
      style: 'minimal', 
      colors: 'Приглушенные натуральные',
      flowers: 'Пампасная трава, лунария',
      occasion: 'Фотосессия'
    },
    { 
      name: 'Тропики', 
      style: 'modern', 
      colors: 'Яркие экзотические',
      flowers: 'Стрелиция, орхидеи, антуриум',
      occasion: 'Летняя вечеринка'
    },
    { 
      name: 'Лофт', 
      style: 'minimal', 
      colors: 'Серо-зеленый',
      flowers: 'Суккуленты, эвкалипт, хлопок',
      occasion: 'Индустриальный стиль'
    },
  ];

  const styles = [
    { id: 'all', name: 'Все букеты', icon: 'Flower2' },
    { id: 'classic', name: 'Классические', icon: 'Award' },
    { id: 'modern', name: 'Современные', icon: 'Zap' },
    { id: 'minimal', name: 'Минималистичные', icon: 'Minimize2' },
  ];

  const filteredBouquets = selectedStyle === 'all' 
    ? bouquets 
    : bouquets.filter(b => b.style === selectedStyle);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Галерея букетов</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Вдохновляющая коллекция флористических композиций в разных стилях
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {styles.map(style => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedStyle === style.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-muted-foreground hover:bg-muted'
                }`}
              >
                <Icon name={style.icon as any} size={20} />
                {style.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredBouquets.map((bouquet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative group">
                  <img 
                    src={`https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/${
                      index % 3 === 0 ? '6bc9d80f-4388-4052-bf38-e23353fecc39' : 
                      index % 3 === 1 ? '9567d347-c07b-4ebb-8068-e30fdc1046fb' : 
                      'd8affe89-9ff6-4dde-8de9-9446e8c07443'
                    }.jpg`}
                    alt={bouquet.name}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">Нажмите для увеличения</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {bouquet.style === 'classic' ? 'Классика' : 
                     bouquet.style === 'modern' ? 'Модерн' : 'Минимал'}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant text-xl">{bouquet.name}</CardTitle>
                  <CardDescription>{bouquet.occasion}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Palette" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">Палитра: </span>
                      <span className="text-sm text-muted-foreground">{bouquet.colors}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Flower" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">Состав: </span>
                      <span className="text-sm text-muted-foreground">{bouquet.flowers}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" />
                  Индивидуальный заказ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Понравился букет из галереи? Мы можем создать его специально для вас или адаптировать 
                  под ваши предпочтения.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Изменение цветовой гаммы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Замена цветов на сезонные</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Корректировка размера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Добавление персонализации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Camera" className="text-primary" />
                  Советы для выбора
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  При выборе букета учитывайте не только красоту, но и практичность:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Сезонность цветов влияет на цену и стойкость</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Учитывайте место проведения мероприятия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Проверьте, нет ли аллергии на пыльцу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Заказывайте заранее для сложных композиций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Info" className="text-primary" />
                О нашей работе
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Все букеты в галерее - это реальные работы наших флористов. Каждая композиция создана 
                с любовью и вниманием к деталям. Мы используем только свежие цветы высшего качества 
                и следуем последним трендам флористики.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon name="Award" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-2xl">500+</div>
                  <div className="text-sm">Созданных букетов</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-2xl">300+</div>
                  <div className="text-sm">Довольных клиентов</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon name="Star" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-2xl">5.0</div>
                  <div className="text-sm">Средний рейтинг</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Icon name="Clock" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground text-2xl">10</div>
                  <div className="text-sm">Лет опыта</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BouquetGallery;
