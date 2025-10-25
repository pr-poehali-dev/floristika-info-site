import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FloristTools = () => {
  const tools = [
    {
      name: 'Флористический секатор',
      description: 'Профессиональный инструмент для обрезки стеблей. Острые лезвия обеспечивают чистый срез без повреждения растительных тканей.',
      uses: 'Обрезка стеблей цветов, веток, формирование букетов',
      price: 'От 800 до 3000 руб',
      tip: 'Выбирайте секатор с удобной ручкой и возможностью регулировки натяжения',
      icon: 'Scissors'
    },
    {
      name: 'Флористический нож',
      description: 'Острый нож с изогнутым лезвием для точной обрезки стеблей под углом. Профессиональный инструмент флориста.',
      uses: 'Обрезка мягких стеблей, зачистка, точные срезы',
      price: 'От 500 до 2000 руб',
      tip: 'Регулярно затачивайте нож, храните в чехле',
      icon: 'Move'
    },
    {
      name: 'Флористическая проволока',
      description: 'Проволока разной толщины для создания каркасов и укрепления стеблей. Доступна в зеленом и других цветах.',
      uses: 'Создание каркасов, усиление слабых стеблей, формирование композиций',
      price: 'От 50 до 300 руб за моток',
      tip: 'Имейте набор разной толщины - от тонкой (№22-24) до толстой (№18-20)',
      icon: 'GitBranch'
    },
    {
      name: 'Флористическая лента (тейп-лента)',
      description: 'Самоклеящаяся лента для обмотки стеблей и проволоки. Растягивается и липнет сама к себе.',
      uses: 'Обмотка стеблей, закрепление элементов, маскировка проволоки',
      price: 'От 80 до 200 руб',
      tip: 'Слегка растягивайте ленту при намотке для лучшего сцепления',
      icon: 'Layers'
    },
    {
      name: 'Флористическая пена (оазис)',
      description: 'Специальная пена для закрепления цветов. Удерживает влагу и позволяет создавать сложные композиции.',
      uses: 'Основа для композиций, венков, корзин',
      price: 'От 50 до 300 руб за блок',
      tip: 'Замачивайте пену правильно: положите на воду и дайте пропитаться естественным путем',
      icon: 'Box'
    },
    {
      name: 'Кензан (наколка)',
      description: 'Японская металлическая основа с иглами для икебаны и современных композиций.',
      uses: 'Фиксация цветов в низких вазах, икебана, минималистичные композиции',
      price: 'От 300 до 1500 руб',
      tip: 'Разные размеры для разных композиций, тяжелый вес обеспечивает устойчивость',
      icon: 'Grid3x3'
    },
    {
      name: 'Флористический степлер',
      description: 'Специальный степлер для скрепления упаковочных материалов и создания декоративных элементов.',
      uses: 'Скрепление бумаги, создание упаковки, фиксация лент',
      price: 'От 400 до 1200 руб',
      tip: 'Используйте только для упаковки, не для живых стеблей',
      icon: 'Paperclip'
    },
    {
      name: 'Клеевой пистолет',
      description: 'Термоклеевой пистолет для флористики. Используется для искусственных цветов и декора.',
      uses: 'Приклеивание декора, работа с искусственными материалами',
      price: 'От 300 до 1500 руб',
      tip: 'Не используйте на живых цветах, только для искусственных материалов',
      icon: 'Droplet'
    },
    {
      name: 'Спрей для цветов',
      description: 'Специальные спреи: консервант для продления жизни, краска, блеск, снег для декора.',
      uses: 'Продление жизни цветов, декорирование, защита',
      price: 'От 200 до 800 руб',
      tip: 'Распыляйте с расстояния 20-30 см равномерным слоем',
      icon: 'Sparkles'
    },
    {
      name: 'Флористические ножницы',
      description: 'Специальные ножницы с зубчатым краем для обрезки лент и упаковочных материалов.',
      uses: 'Обрезка лент, бумаги, тканей',
      price: 'От 200 до 800 руб',
      tip: 'Не используйте для обрезки проволоки - затупятся',
      icon: 'Scissors'
    },
    {
      name: 'Опрыскиватель',
      description: 'Распылитель для увлажнения цветов и создания оптимальной влажности.',
      uses: 'Опрыскивание букетов, увлажнение листьев',
      price: 'От 100 до 500 руб',
      tip: 'Используйте чистую воду комнатной температуры',
      icon: 'CloudRain'
    },
    {
      name: 'Флористическая сетка',
      description: 'Декоративная сетка для упаковки и создания объема в композициях.',
      uses: 'Упаковка букетов, создание объема, декор',
      price: 'От 100 до 400 руб за рулон',
      tip: 'Комбинируйте разные цвета и текстуры для интересных эффектов',
      icon: 'Layout'
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Инструменты флориста</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Профессиональное оборудование для создания флористических шедевров
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
              alt="Флористические инструменты"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Info" className="text-primary" />
                Важность правильных инструментов
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Профессиональные инструменты - это инвестиция в качество вашей работы. Хорошие инструменты 
                не только облегчают процесс создания композиций, но и продлевают жизнь цветам.
              </p>
              <p>
                Острые режущие инструменты обеспечивают чистый срез, который не травмирует растение и позволяет 
                ему лучше впитывать воду. Качественные вспомогательные материалы помогают надежно фиксировать 
                элементы композиции.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-cormorant flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={tool.icon as any} className="text-primary" size={24} />
                    </div>
                    {tool.name}
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm text-foreground">Применение: </span>
                        <span className="text-sm text-muted-foreground">{tool.uses}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="DollarSign" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm text-foreground">Цена: </span>
                        <span className="text-sm text-muted-foreground">{tool.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="Lightbulb" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-sm text-foreground">Совет: </span>
                        <span className="text-sm text-muted-foreground">{tool.tip}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="ShoppingCart" className="text-primary" />
                  Базовый набор для начинающих
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Если вы только начинаете, вам понадобится минимальный набор:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Качественный секатор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Флористический нож</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Проволока средней толщины</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Тейп-лента зеленая</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Флористическая пена</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Опрыскиватель</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Бюджет:</strong> 3000-5000 рублей на базовый набор
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Star" className="text-primary" />
                  Уход за инструментами
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Правильный уход продлит срок службы ваших инструментов:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Очищайте режущие инструменты после каждого использования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Дезинфицируйте лезвия спиртом для предотвращения болезней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Затачивайте режущие инструменты регулярно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Храните в сухом месте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Смазывайте механизмы секаторов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Используйте чехлы для острых инструментов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="AlertCircle" className="text-primary" />
                Техника безопасности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Icon name="AlertTriangle" className="text-yellow-500" />
                    <span>При резке</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Режьте от себя</li>
                    <li>• Держите пальцы подальше от лезвия</li>
                    <li>• Используйте устойчивую поверхность</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Icon name="AlertTriangle" className="text-orange-500" />
                    <span>С проволокой</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Не оставляйте острые концы</li>
                    <li>• Загибайте края проволоки</li>
                    <li>• Носите защитные очки</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Icon name="AlertTriangle" className="text-red-500" />
                    <span>С клеевым пистолетом</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Не прикасайтесь к наконечнику</li>
                    <li>• Работайте на защищенной поверхности</li>
                    <li>• Отключайте после использования</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FloristTools;
