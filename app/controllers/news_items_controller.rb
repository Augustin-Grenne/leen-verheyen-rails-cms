class NewsItemsController < ApplicationController
  
  before_action :set_news_item, only:[:show, :edit, :update, :destroy]

  def index
    @news_items = NewsItem.all.order("created_at ASC")
  end
  
  def new 
    @news_item = NewsItem.new
  end

  def create
    @news_item = NewsItem.new(news_item_params)
    if @news_item.save
      flash[:notice] = "The news item was sucessfully created."
      redirect_to news_item_path(@news_item)
    else 
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @news_item.update(news_item_params)
      flash[:notice] = "The news item was sucessfully updated."
      redirect_to news_item_path(@news_item)
    else 
      render :edit
    end
  end

  def destroy
    if @news_item.destroy
      flash[:notice] = "News item was sucessfully deleted."
      redirect_to news_items_path
    else
      flash[:notice] = "News item could not be deleted."
      redirect_to news_items_path
    end
  end

private
  def set_news_item
    @news_item = NewsItem.find(params[:id])
  end
  def news_item_params
    params.require(:news_item).permit(:title, :body, :show)
  end

end