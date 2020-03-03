class NewsItemsController < ApplicationController
  def new 
    @news_item = NewsItem.new
  end

  def create
    #render plain: params[:news_item].inspect
    @news_item = NewsItem.new(news_item_params)
    if @news_item.save
      flash[:notice] = "The news item was sucessfully created."
      redirect_to news_item_path(@news_item)
    else 
      render :new
    end
  end

  def show
    @news_item =  NewsItem.find(params[:id])
  end

private
  def news_item_params
    params.require(:news_item).permit(:title, :body, :show)
  end

end