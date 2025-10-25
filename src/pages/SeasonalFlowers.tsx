import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SeasonalFlowers = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Сезонность цветов</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Узнайте, какие цветы доступны в разные времена года
          </p>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Info" className="text-primary" />
                Почему важна сезонность?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3">
              <p>
                Выбор сезонных цветов имеет множество преимуществ: они свежее, дешевле и экологичнее. 
                Сезонные цветы выращены в естественных условиях, поэтому дольше сохраняют свою красоту.
              </p>
              <p>
                Работа с сезонными материалами - это также способ быть в гармонии с природой и поддерживать 
                местных производителей.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Flower" className="text-green-600" />
                  Весна (Март - Май)
                </CardTitle>
                <CardDescription>Время пробуждения и нежных красок</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Тюльпаны</h4>
                      <p className="text-sm text-muted-foreground">Символ весны, яркие и изящные</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Нарциссы</h4>
                      <p className="text-sm text-muted-foreground">Солнечные и ароматные</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Гиацинты</h4>
                      <p className="text-sm text-muted-foreground">Пышные соцветия с сильным ароматом</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ранункулюсы</h4>
                      <p className="text-sm text-muted-foreground">Нежные многослойные лепестки</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Фрезии</h4>
                      <p className="text-sm text-muted-foreground">Элегантные и душистые</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Сирень</h4>
                      <p className="text-sm text-muted-foreground">Ароматные кисти соцветий</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Sun" className="text-orange-500" />
                  Лето (Июнь - Август)
                </CardTitle>
                <CardDescription>Буйство красок и ароматов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Пионы</h4>
                      <p className="text-sm text-muted-foreground">Роскошные и ароматные</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Садовые розы</h4>
                      <p className="text-sm text-muted-foreground">Классика летнего сада</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Гортензии</h4>
                      <p className="text-sm text-muted-foreground">Пышные шарообразные соцветия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Дельфиниум</h4>
                      <p className="text-sm text-muted-foreground">Высокие синие свечи</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Лаванда</h4>
                      <p className="text-sm text-muted-foreground">Ароматная и успокаивающая</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Подсолнухи</h4>
                      <p className="text-sm text-muted-foreground">Солнечные и жизнерадостные</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-red-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Leaf" className="text-amber-600" />
                  Осень (Сентябрь - Ноябрь)
                </CardTitle>
                <CardDescription>Теплые тона и богатые текстуры</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Хризантемы</h4>
                      <p className="text-sm text-muted-foreground">Разнообразие форм и оттенков</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Георгины</h4>
                      <p className="text-sm text-muted-foreground">Яркие и фактурные</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Астры</h4>
                      <p className="text-sm text-muted-foreground">Осенняя классика</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Амарант</h4>
                      <p className="text-sm text-muted-foreground">Ниспадающие соцветия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Целозия</h4>
                      <p className="text-sm text-muted-foreground">Необычная бархатная текстура</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Декоративные ветки</h4>
                      <p className="text-sm text-muted-foreground">С ягодами и листьями</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-slate-50">
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Snowflake" className="text-blue-500" />
                  Зима (Декабрь - Февраль)
                </CardTitle>
                <CardDescription>Элегантность и праздничное настроение</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Амариллис</h4>
                      <p className="text-sm text-muted-foreground">Крупные праздничные цветы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Анемоны</h4>
                      <p className="text-sm text-muted-foreground">Нежные и элегантные</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Морозник</h4>
                      <p className="text-sm text-muted-foreground">Зимний садовый цветок</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Эвкалипт</h4>
                      <p className="text-sm text-muted-foreground">Ароматная зелень</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ветки хвои</h4>
                      <p className="text-sm text-muted-foreground">Праздничный аромат</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" className="text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Белые розы</h4>
                      <p className="text-sm text-muted-foreground">Зимняя классика</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Calendar" className="text-primary" />
                Круглогодичные цветы
              </CardTitle>
              <CardDescription>Доступны в любое время года благодаря тепличному выращиванию</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Розы</h4>
                  <p className="text-sm text-muted-foreground">Классика на все времена</p>
                </div>
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Лилии</h4>
                  <p className="text-sm text-muted-foreground">Элегантные и ароматные</p>
                </div>
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Хризантемы</h4>
                  <p className="text-sm text-muted-foreground">Разнообразие форм</p>
                </div>
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Гвоздики</h4>
                  <p className="text-sm text-muted-foreground">Долговечные и яркие</p>
                </div>
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Альстромерии</h4>
                  <p className="text-sm text-muted-foreground">Стойкие и красивые</p>
                </div>
                <div className="text-center space-y-2">
                  <Icon name="Flower2" size={40} className="text-primary mx-auto" />
                  <h4 className="font-semibold">Орхидеи</h4>
                  <p className="text-sm text-muted-foreground">Экзотическая роскошь</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SeasonalFlowers;
