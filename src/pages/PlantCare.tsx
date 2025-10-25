import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PlantCare = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Уход за комнатными растениями</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Советы по уходу за горшечными растениями и цветами в домашних условиях
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/d8affe89-9ff6-4dde-8de9-9446e8c07443.jpg"
              alt="Комнатные растения"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Droplet" className="text-primary" />
                  Полив
                </CardTitle>
                <CardDescription>Правильный режим увлажнения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Основные правила:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Поливайте, когда верхний слой почвы подсох</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Используйте отстоянную воду комнатной температуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Лучше недолить, чем перелить</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Сливайте воду из поддона через 30 минут</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Зимой полив сокращают</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Совет:</strong> Проверяйте влажность, погружая палец в почву на 2-3 см. 
                    Если сухо - пора поливать.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Sun" className="text-primary" />
                  Освещение
                </CardTitle>
                <CardDescription>Правильное расположение растений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Виды освещения:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Sun" size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                      <span><strong>Яркий свет:</strong> Южные окна (кактусы, суккуленты)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CloudSun" size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                      <span><strong>Рассеянный:</strong> Восточные/западные окна (большинство растений)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Cloud" size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                      <span><strong>Полутень:</strong> Северные окна (папоротники, плющи)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Важно:</strong> Поворачивайте растения раз в неделю для равномерного роста. 
                    Зимой переставьте ближе к свету.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Thermometer" className="text-primary" />
                Температура и влажность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Температурный режим:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Большинство растений: 18-25°C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Тропические: 20-28°C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Суккуленты: переносят от 10°C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Избегайте сквозняков и батарей</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Влажность воздуха:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Опрыскивайте листья 2-3 раза в неделю</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Используйте увлажнитель воздуха зимой</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Группируйте растения для микроклимата</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Ставьте горшки на поддоны с влажным керамзитом</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Beaker" className="text-primary" />
                  Подкормка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Растения нуждаются в дополнительном питании в период активного роста (весна-лето).</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Удобряйте каждые 2-4 недели весной и летом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Зимой подкормки сократите или прекратите</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Используйте специализированные удобрения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Не удобряйте больные или пересаженные растения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Package" className="text-primary" />
                  Пересадка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Регулярная пересадка необходима для здоровья растений и их роста.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Молодые растения - ежегодно весной</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Взрослые - раз в 2-3 года</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Горшок на 2-3 см больше предыдущего</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Обязательный дренажный слой</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Bug" className="text-primary" />
                Борьба с вредителями и болезнями
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Паутинный клещ</h4>
                  <p className="text-sm text-muted-foreground">Паутинка на листьях</p>
                  <p className="text-xs text-muted-foreground">Решение: опрыскивание мыльным раствором, повышение влажности</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Тля</h4>
                  <p className="text-sm text-muted-foreground">Мелкие насекомые на побегах</p>
                  <p className="text-xs text-muted-foreground">Решение: инсектицидные препараты, мыльный раствор</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Мучнистый червец</h4>
                  <p className="text-sm text-muted-foreground">Белый налет, как вата</p>
                  <p className="text-xs text-muted-foreground">Решение: спиртовой раствор, инсектициды</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="AlertCircle" className="text-primary" />
                Признаки проблем
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-yellow-500" />
                      Желтеют листья
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: переувлажнение, недостаток света или питания</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-orange-500" />
                      Опадают листья
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: сквозняк, резкая смена температуры, пересыхание</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-red-500" />
                      Коричневые края листьев
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: низкая влажность, избыток удобрений</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-purple-500" />
                      Вытягиваются побеги
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: недостаток света, избыток азота</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-blue-500" />
                      Вялые листья
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: недостаток или избыток воды, корневая гниль</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="AlertTriangle" size={18} className="text-green-500" />
                      Не цветет
                    </h4>
                    <p className="text-sm text-muted-foreground">Причины: недостаток света, неправильная зимовка, дефицит питания</p>
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

export default PlantCare;
