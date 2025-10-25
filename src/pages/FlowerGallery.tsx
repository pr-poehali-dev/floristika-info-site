import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const FlowerGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const flowers = [
    { name: 'Пион садовый', category: 'popular', color: 'Розовый', season: 'Лето' },
    { name: 'Роза кустовая', category: 'popular', color: 'Белый', season: 'Круглый год' },
    { name: 'Тюльпан французский', category: 'popular', color: 'Красный', season: 'Весна' },
    { name: 'Ранункулюс', category: 'wedding', color: 'Персиковый', season: 'Весна' },
    { name: 'Гортензия', category: 'popular', color: 'Синий', season: 'Лето' },
    { name: 'Лилия восточная', category: 'popular', color: 'Белый', season: 'Круглый год' },
    { name: 'Протея королевская', category: 'exotic', color: 'Розовый', season: 'Круглый год' },
    { name: 'Стрелиция', category: 'exotic', color: 'Оранжевый', season: 'Круглый год' },
    { name: 'Орхидея фаленопсис', category: 'exotic', color: 'Белый', season: 'Круглый год' },
    { name: 'Эустома', category: 'wedding', color: 'Сиреневый', season: 'Лето' },
    { name: 'Георгин', category: 'popular', color: 'Бордовый', season: 'Осень' },
    { name: 'Хризантема одноголовая', category: 'popular', color: 'Желтый', season: 'Осень' },
  ];

  const categories = [
    { id: 'all', name: 'Все цветы', icon: 'Flower2' },
    { id: 'popular', name: 'Популярные', icon: 'Star' },
    { id: 'exotic', name: 'Экзотические', icon: 'Sparkles' },
    { id: 'wedding', name: 'Свадебные', icon: 'Heart' },
  ];

  const filteredFlowers = selectedCategory === 'all' 
    ? flowers 
    : flowers.filter(f => f.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Галерея цветов</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Фотогалерея популярных и редких цветов для ваших букетов
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-muted-foreground hover:bg-muted'
                }`}
              >
                <Icon name={category.icon as any} size={20} />
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredFlowers.map((flower, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={`https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/${
                      index % 3 === 0 ? '6bc9d80f-4388-4052-bf38-e23353fecc39' : 
                      index % 3 === 1 ? '9567d347-c07b-4ebb-8068-e30fdc1046fb' : 
                      'd8affe89-9ff6-4dde-8de9-9446e8c07443'
                    }.jpg`}
                    alt={flower.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {flower.color}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant">{flower.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>{flower.season}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Tag" size={16} className="text-primary" />
                      <span className="capitalize">
                        {flower.category === 'popular' ? 'Популярные' : 
                         flower.category === 'exotic' ? 'Экзотика' : 'Свадебные'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Camera" className="text-primary" />
                О нашей галерее
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Наша галерея содержит фотографии самых популярных цветов, используемых во флористике. 
                Каждое фото сопровождается информацией о сезонности, цвете и категории цветка.
              </p>
              <p>
                Используйте галерею для вдохновения при создании своих композиций или для выбора цветов 
                для особого случая. Все представленные цветы доступны для заказа в нашем салоне.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <Icon name="Image" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">100+</div>
                    <div className="text-sm">Фотографий</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <Icon name="Flower2" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">50+</div>
                    <div className="text-sm">Видов цветов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <Icon name="Palette" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">20+</div>
                    <div className="text-sm">Цветовых гамм</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FlowerGallery;
