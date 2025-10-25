import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PopularFlowers = () => {
  const flowers = [
    {
      name: 'Розы',
      latin: 'Rosa',
      description: 'Королева цветов, символ любви и красоты. Существует более 30 000 сортов роз различных форм и оттенков.',
      colors: 'Все цвета радуги',
      care: 'Обрезать стебли под углом, менять воду каждые 2 дня',
      meaning: 'Любовь, страсть, восхищение',
      icon: 'Heart'
    },
    {
      name: 'Тюльпаны',
      latin: 'Tulipa',
      description: 'Символ весны и обновления. Особенно популярны в Нидерландах, где существует культ тюльпанов.',
      colors: 'Красные, желтые, розовые, белые, фиолетовые',
      care: 'Обрезать стебли прямо, держать в прохладе',
      meaning: 'Весна, новые начинания, совершенная любовь',
      icon: 'Flower'
    },
    {
      name: 'Пионы',
      latin: 'Paeonia',
      description: 'Роскошные многолепестковые цветы с чарующим ароматом. Символ богатства и процветания в азиатской культуре.',
      colors: 'Розовые, белые, красные, коралловые',
      care: 'Подрезать стебли, менять воду часто',
      meaning: 'Счастье, удача, процветание',
      icon: 'Sparkles'
    },
    {
      name: 'Лилии',
      latin: 'Lilium',
      description: 'Величественные цветы с сильным ароматом. Символ чистоты и невинности в христианской традиции.',
      colors: 'Белые, розовые, оранжевые, желтые',
      care: 'Удалять пыльники, менять воду регулярно',
      meaning: 'Чистота, благородство, величие',
      icon: 'Star'
    },
    {
      name: 'Хризантемы',
      latin: 'Chrysanthemum',
      description: 'Осенние фавориты с невероятным разнообразием форм. Национальный цветок Японии.',
      colors: 'Желтые, белые, красные, фиолетовые, бронзовые',
      care: 'Обрезать листья под водой, хорошо стоят',
      meaning: 'Радость, долголетие, верность',
      icon: 'Sun'
    },
    {
      name: 'Орхидеи',
      latin: 'Orchidaceae',
      description: 'Экзотические цветы невероятной красоты. Самое большое семейство растений на Земле.',
      colors: 'Белые, розовые, фиолетовые, желтые',
      care: 'Минимум воды, яркий рассеянный свет',
      meaning: 'Роскошь, красота, утонченность',
      icon: 'Award'
    },
    {
      name: 'Гортензии',
      latin: 'Hydrangea',
      description: 'Пышные шарообразные соцветия, состоящие из множества мелких цветков. Цвет зависит от кислотности почвы.',
      colors: 'Синие, розовые, белые, фиолетовые',
      care: 'Погрузить полностью в воду на час после покупки',
      meaning: 'Благодарность, искренность, изобилие',
      icon: 'Cloud'
    },
    {
      name: 'Герберы',
      latin: 'Gerbera',
      description: 'Яркие ромашки, символизирующие радость и позитив. Популярны благодаря насыщенным цветам.',
      colors: 'Все яркие цвета',
      care: 'Менять воду ежедневно, обрезать стебли',
      meaning: 'Радость, веселье, невинность',
      icon: 'Smile'
    },
    {
      name: 'Альстромерии',
      latin: 'Alstroemeria',
      description: 'Стойкие цветы с пестрыми лепестками. Известны как "перуанские лилии".',
      colors: 'Розовые, оранжевые, желтые, белые',
      care: 'Очень неприхотливы, стоят до 2 недель',
      meaning: 'Дружба, преданность, благосостояние',
      icon: 'Users'
    },
    {
      name: 'Ранункулюсы',
      latin: 'Ranunculus',
      description: 'Нежные цветы с множеством тонких лепестков, напоминающие розы. Любимцы флористов для свадеб.',
      colors: 'Пастельные оттенки всех цветов',
      care: 'Прохладное место, менять воду часто',
      meaning: 'Очарование, привлекательность, сияние',
      icon: 'Gem'
    },
    {
      name: 'Гвоздики',
      latin: 'Dianthus',
      description: 'Традиционные цветы с гофрированными лепестками и приятным ароматом. Очень долго стоят в вазе.',
      colors: 'Красные, розовые, белые, желтые',
      care: 'Обрезать между узлами, стоят до 3 недель',
      meaning: 'Любовь, восхищение, материнская нежность',
      icon: 'Heart'
    },
    {
      name: 'Фрезии',
      latin: 'Freesia',
      description: 'Изящные воронковидные цветы с сильным сладким ароматом. Символ доверия.',
      colors: 'Белые, желтые, розовые, фиолетовые',
      care: 'Прохладное место, регулярная смена воды',
      meaning: 'Доверие, невинность, дружба',
      icon: 'Key'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Популярные цветы</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Энциклопедия самых любимых и востребованных цветов во флористике
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {flowers.map((flower, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-cormorant flex items-center gap-2">
                    <Icon name={flower.icon as any} className="text-primary" />
                    {flower.name}
                  </CardTitle>
                  <CardDescription className="italic">{flower.latin}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{flower.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Palette" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Цвета: </span>
                        <span className="text-sm text-muted-foreground">{flower.colors}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="Droplet" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Уход: </span>
                        <span className="text-sm text-muted-foreground">{flower.care}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="MessageCircle" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Значение: </span>
                        <span className="text-sm text-muted-foreground">{flower.meaning}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Info" className="text-primary" />
                Язык цветов
              </CardTitle>
              <CardDescription>Что говорят цветы разных оттенков</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500"></div>
                    <span className="font-semibold">Красный</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Страсть, любовь, желание, уважение</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-400"></div>
                    <span className="font-semibold">Розовый</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Нежность, восхищение, благодарность</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300"></div>
                    <span className="font-semibold">Белый</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Чистота, невинность, новые начинания</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                    <span className="font-semibold">Желтый</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Радость, дружба, счастье</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                    <span className="font-semibold">Оранжевый</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Энтузиазм, энергия, тепло</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                    <span className="font-semibold">Фиолетовый</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Роскошь, таинственность, элегантность</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PopularFlowers;
