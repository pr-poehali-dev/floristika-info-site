import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RarePlants = () => {
  const rarePlants = [
    {
      name: 'Королевская Протея',
      latin: 'Protea cynaroides',
      description: 'Национальный цветок ЮАР, величественный и необычный. Цветок может достигать 30 см в диаметре.',
      origin: 'Южная Африка',
      price: 'Очень высокая',
      availability: 'Редко, только в специализированных магазинах',
      features: 'Огромный размер, фактурные прицветники, долго стоит'
    },
    {
      name: 'Стрелиция райская',
      latin: 'Strelitzia reginae',
      description: 'Экзотический цветок, напоминающий райскую птицу. Символ свободы и великолепия.',
      origin: 'Южная Африка',
      price: 'Высокая',
      availability: 'Средняя, чаще в крупных городах',
      features: 'Необычная форма, яркие цвета, долговечность'
    },
    {
      name: 'Глориоза',
      latin: 'Gloriosa superba',
      description: 'Экзотический цветок с загнутыми лепестками пламенных оттенков. Называется "цветок славы".',
      origin: 'Тропическая Африка и Азия',
      price: 'Высокая',
      availability: 'Редкая',
      features: 'Необычная форма лепестков, огненная окраска'
    },
    {
      name: 'Черная Калла',
      latin: 'Zantedeschia schwarzwalder',
      description: 'Элегантная калла почти черного, глубокого бордового цвета. Символ изысканности.',
      origin: 'Искусственная селекция',
      price: 'Высокая',
      availability: 'Редкая, сезонная',
      features: 'Темный, почти черный цвет, элегантная форма'
    },
    {
      name: 'Лизиантус',
      latin: 'Eustoma grandiflorum',
      description: 'Нежные цветы, напоминающие розы и маки одновременно. Называются также "ирландской розой".',
      origin: 'Северная Америка, Япония (селекция)',
      price: 'Средне-высокая',
      availability: 'Средняя, но не везде',
      features: 'Махровые лепестки, пастельные оттенки, элегантность'
    },
    {
      name: 'Брунния',
      latin: 'Brunia albiflora',
      description: 'Необычное южноафриканское растение с серебристыми шарообразными соцветиями.',
      origin: 'Южная Африка',
      price: 'Высокая',
      availability: 'Редкая',
      features: 'Серебристые шарики, фактурность, долговечность'
    },
    {
      name: 'Антуриум Andre Black',
      latin: 'Anthurium andreanum',
      description: 'Темный, почти черный антуриум. Экзотический и мистический цветок.',
      origin: 'Гибридная форма',
      price: 'Очень высокая',
      availability: 'Очень редкая',
      features: 'Темный цвет, глянцевая поверхность, экзотичность'
    },
    {
      name: 'Морозник',
      latin: 'Helleborus',
      description: 'Зимний садовый цветок, цветущий в снегу. Один из немногих цветов холодного сезона.',
      origin: 'Европа, Западная Азия',
      price: 'Средне-высокая',
      availability: 'Редкая, зимой',
      features: 'Цветет зимой, нежные оттенки, морозостойкость'
    },
    {
      name: 'Амарант',
      latin: 'Amaranthus',
      description: 'Растение с длинными ниспадающими соцветиями бордового или зеленого цвета.',
      origin: 'Америка, Азия',
      price: 'Средняя',
      availability: 'Сезонная, осенью',
      features: 'Длинные ниспадающие соцветия, насыщенный цвет'
    },
    {
      name: 'Ранункулюс Клоуни',
      latin: 'Ranunculus asiaticus Cloni',
      description: 'Особо крупные ранункулюсы с плотными махровыми цветками до 10 см в диаметре.',
      origin: 'Италия (селекция)',
      price: 'Высокая',
      availability: 'Редкая, весной',
      features: 'Огромный размер, плотные махровые лепестки'
    },
    {
      name: 'Целозия Пампас',
      latin: 'Celosia argentea plumosa',
      description: 'Экзотическое растение с перистыми соцветиями, напоминающими огонь или перья.',
      origin: 'Тропики Азии',
      price: 'Средняя',
      availability: 'Сезонная',
      features: 'Бархатная текстура, яркие цвета, необычная форма'
    },
    {
      name: 'Синий Чертополох',
      latin: 'Eryngium',
      description: 'Фактурное растение с колючими синими соцветиями. Популярно в современной флористике.',
      origin: 'Европа',
      price: 'Средне-высокая',
      availability: 'Средняя',
      features: 'Необычная фактура, стальной синий цвет'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Редкие растения</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Коллекция необычных и экзотических цветов для уникальных композиций
          </p>

          <Card className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" />
                Почему выбирают редкие растения?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Редкие и экзотические растения позволяют создавать по-настоящему уникальные композиции, которые невозможно повторить. 
                Они привлекают внимание необычными формами, текстурами и цветами.
              </p>
              <p>
                Использование редких растений во флористике - это способ показать утонченный вкус, готовность к экспериментам 
                и стремление к эксклюзивности. Такие композиции запоминаются надолго.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {rarePlants.map((plant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="font-cormorant">{plant.name}</CardTitle>
                  <CardDescription className="italic">{plant.latin}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{plant.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Происхождение: </span>
                        <span className="text-sm text-muted-foreground">{plant.origin}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Ценовая категория: </span>
                        <span className="text-sm text-muted-foreground">{plant.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="ShoppingCart" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Доступность: </span>
                        <span className="text-sm text-muted-foreground">{plant.availability}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="Star" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm">Особенности: </span>
                        <span className="text-sm text-muted-foreground">{plant.features}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" />
                  Тренды в редких растениях
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Южноафриканские растения (протеи, брунии)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Темные, почти черные цветы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Фактурные растения необычных форм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Экзотические тропические цветы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="AlertCircle" className="text-primary" />
                  Важно знать
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Заказывайте редкие растения заранее</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Учитывайте сезонность экзотики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Некоторые растения требуют особого ухода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Цены значительно выше обычных цветов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RarePlants;
