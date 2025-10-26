export default function Summary({items})
{
  const itemsCount = items.length;
  if(itemsCount == 0)
    return (
      <footer className="summary">Alışveriş listenizi hazırlamaya başlayabilirsiniz.</footer>
    );
  const completedCount = items.filter(item => item.completed).length
  return (
    <footer className="summary">
      {
        itemsCount == completedCount
        ? 
        (<p>Alışverişi tamamladınız.</p>) 
        :
        (<p>Alışveriş sepetinizde {itemsCount} üründen {completedCount} tanesini aldınız.</p>)
      }
    </footer>
  );
}